// post-repository.factory.ts
import { Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { DataBaseService } from 'src/core/databases/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostRepositoryFactory {
  constructor(private readonly prisma: DataBaseService) {}

  create(tx?: Prisma.TransactionClient): PostRepository {
    // Si on passe un client de transaction, l'utiliser, sinon la version par défaut.
    return new PostRepository(tx ?? this.prisma);
  }
}
