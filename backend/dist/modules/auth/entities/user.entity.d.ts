import { CatalogueEntity } from '@core/entities';
import { RoleEntity } from './role.entity';
export declare class UserEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    roles: RoleEntity[];
    bloodType: CatalogueEntity;
    ethnicOrigin: CatalogueEntity;
    identificationType: CatalogueEntity;
    gender: CatalogueEntity;
    maritalStatus: CatalogueEntity;
    sex: CatalogueEntity;
    activatedAt: Date;
    birthdate: Date;
    email: string;
    emailVerifiedAt: Date;
    identification: string;
    lastname: string;
    password: string;
    passwordChanged: boolean;
    personalEmail: string;
    phone: string;
    maxAttempts: number;
    name: string;
    suspendedAt: Date;
    username: string;
    hashPassword(): Promise<void>;
    checkBirthdate(): Promise<void>;
}