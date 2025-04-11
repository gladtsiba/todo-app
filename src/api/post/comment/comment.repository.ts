import { BadRequestException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DataBaseService } from 'src/core/databases/database.service';

export class CommentRepository {
  constructor(private dataBaseService: DataBaseService | Prisma.TransactionClient) {}

  findAll() {
    return this.dataBaseService.comments.findMany();
  }

  findOne(id: number) {
    return this.dataBaseService.comments.findUnique({ where: { id } });
  }

  async create(data: Prisma.CommentsUncheckedCreateInput) {
    if(! this.isCommentNameValid(data.name)) {
      throw new BadRequestException('Le nom du commentaire est invalide');
    }
    const client = this.dataBaseService;
    try {
      return await client.comments.create({ data });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2003') {
          console.log(e.meta);
          console.log(e);
          throw new BadRequestException(
            `La Clé etrangère n'exist pas dans le model ${e?.meta?.modelName}`,
          );
        }
        // Tu peux décider de relancer ou pas ici
      }
      // throw e; // on relance les autres erreurs
      throw e;
    }
  }

  update(data: Prisma.CommentsUncheckedUpdateInput, id: number, tx?: Prisma.TransactionClient) {
    const client = tx ?? this.dataBaseService;
    return client.comments.update({ where: { id }, data });
  }

  remove(id: number, tx?: Prisma.TransactionClient) {
    const client = tx ?? this.dataBaseService;
    return client.comments.delete({ where: { id } });
  }

  private isCommentNameValid(name: string): boolean {
    return !name?.includes('$$$');
  }
}
