import { CataloguesService } from '@core/services';
export declare class CataloguesSeeder {
    private catalogueService;
    constructor(catalogueService: CataloguesService);
    run(): Promise<void>;
    createAcademicPeriodCatalogues(): Promise<void>;
    createBloodTypeCatalogues(): Promise<void>;
    createCareerModalityCatalogues(): Promise<void>;
    createDisabilityTypeCatalogues(): Promise<void>;
    createEducationLevelCatalogues(): Promise<void>;
    createEthnicOriginCatalogues(): Promise<void>;
    createIdentificationTypeCatalogues(): Promise<void>;
    createInstitutionPracticesTypeCatalogues(): Promise<void>;
    createGenderCatalogues(): Promise<void>;
    createMaritalStatusCatalogues(): Promise<void>;
    createProjectScopeCatalogues(): Promise<void>;
    createRegistrationTypeCatalogues(): Promise<void>;
    createScholarshipReason1Catalogues(): Promise<void>;
    createScholarshipReason2Catalogues(): Promise<void>;
    createScholarshipReason3Catalogues(): Promise<void>;
    createScholarshipReason4Catalogues(): Promise<void>;
    createScholarshipReason5Catalogues(): Promise<void>;
    createScholarshipReason6Catalogues(): Promise<void>;
    createScholarshipTypeCatalogues(): Promise<void>;
    createScholarshipFundingTypeCatalogues(): Promise<void>;
    createSchoolDayCatalogues(): Promise<void>;
    createSchoolTypeCatalogues(): Promise<void>;
    createSexCatalogues(): Promise<void>;
    createStudentIncomeForCatalogues(): Promise<void>;
    createStudentOccupationCatalogues(): Promise<void>;
    createYesNoCatalogues(): Promise<void>;
    createYesNoNACatalogues(): Promise<void>;
}
