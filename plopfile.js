module.exports = function (plop) {
  plop.setGenerator("crud", {
    description: "Generate CRUD Operation!",
    prompts: [
      {
        type: "input",
        name: "singularName",
        message: "Enter Usecase Singular name",
      },
      {
        type: "input",
        name: "pluralName",
        message: "Enter Usecase Plural name",
      },
    ],
    actions: [
      {
        type: "addMany",
        base: ".templates/use-cases/crud/",
        destination: "src/use-cases/",
        templateFiles: ".templates/use-cases/crud/",
      },
      {
        type: "append",
        path: "src/use-cases/use-cases.module.ts",
        pattern: `/* PLOP_INJECT_MODULE */`,
        template: `\t\t{{pascalCase singularName}}UseCasesModule,`,
      },
      {
        type: "append",
        path: "src/use-cases/use-cases.module.ts",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { {{pascalCase singularName}}UseCasesModule } from './{{dashCase singularName}}-use-cases/{{dashCase singularName}}-use-cases.module';`,
      },
    ],
  });

  plop.setGenerator("empty", {
    description: "Generate Empty Operation!",
    prompts: [
      {
        type: "input",
        name: "singularName",
        message: "Enter Usecase Name",
      },
      {
        type: "input",
        name: "entityName",
        message: "Enter Usecase Entity Singular name",
      },
      {
        type: "input",
        name: "pluralName",
        message: "Enter Usecase Entity Plural name",
      },
    ],
    actions: [
      {
        type: "addMany",
        base: ".templates/use-cases/empty/",
        destination: process.cwd(),
        templateFiles: ".templates/use-cases/empty/",
      },
    ],
  });

  plop.setGenerator("entity", {
    description: "Generate Entity Code!",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter Entity Name",
      },
    ],
    actions: [
      {
        type: "addMany",
        base: ".templates/infrastructure/entity/",
        destination: "src/infrastructure/database/",
        templateFiles: ".templates/infrastructure/entity/",
      },
      {
        type: "append",
        path: "src/infrastructure/database/database.module.ts",
        pattern: `/* PLOP_INJECT_MODULE */`,
        template: `\t\t{
              provide:'I{{pascalCase name}}Service',
              useClass:{{pascalCase name}}Service
              },`,
      },
      {
        type: "append",
        path: "src/infrastructure/database/providers.ts",
        pattern: `/* PLOP_EXPORT_MODULE */`,
        template: `\t\t{
              provide:'I{{pascalCase name}}Service',
              useClass:{{pascalCase name}}Service
              },`,
      },
      {
        type: "append",
        path: "src/infrastructure/database/providers.ts",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { {{pascalCase name}}Service } from './{{dashCase name}}/{{dashCase name}}.service';`,
      },
      {
        type: "append",
        path: "src/infrastructure/database/entities.ts",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { {{pascalCase name}} } from './{{dashCase name}}/{{dashCase name}}.entity';`,
      },
      {
        type: "append",
        path: "src/infrastructure/database/entities.ts",
        pattern: `/* PLOP_INJECT_ENTITY */`,
        template: `{{pascalCase name}},`,
      },
    ],
  });

  plop.setGenerator("seed", {
    description: "Generate Seed Code!",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter Entity Name",
      },
      {
        type: "input",
        name: "pluralName",
        message: "Enter Usecase Entity Plural name",
      },
    ],
    actions: [
      {
        type: "addMany",
        base: ".templates/infrastructure/seed/",
        destination: "src/infrastructure/seeder/",
        templateFiles: ".templates/infrastructure/seed/",
      },
      {
        type: "append",
        path: "src/infrastructure/seeder/seeder.module.ts",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { {{pascalCase name}}SeederModule } from "./{{dashCase name}}/{{dashCase name}}-seeder.module";`,
      },
      {
        type: "append",
        path: "src/infrastructure/seeder/seeder.module.ts",
        pattern: `/* PLOP_INJECT_MODULE */`,
        template: `{{pascalCase name}}SeederModule,`,
      },
      {
        type: "append",
        path: "src/infrastructure/seeder/seeder.ts",
        pattern: `/* PLOP_ADD_METHOD */`,
        template: `async {{camelCase name}}(): Promise<number> {
          return await Promise.all(this.{{camelCase name}}SeederService.create{{pascalCase name}}())
            .then((created) => {
              const ROW = created.filter(
                (nullValueOrCreatedLanguage) => nullValueOrCreatedLanguage
              ).length;
              return ROW;
            })
            .catch((error) => {
              return Promise.reject(error);
            });
        }`,
      },
      {
        type: "append",
        path: "src/infrastructure/seeder/seeder.ts",
        pattern: `/* PLOP_CALL_METHOD */`,
        template: `const {{upperCase pluralName}} = await this.{{camelCase name}}();`,
      },
      {
        type: "append",
        path: "src/infrastructure/seeder/seeder.ts",
        pattern: `/* PLOP_RETURN_METHOD */`,
        template: `{{upperCase pluralName}},`,
      },
      {
        type: "append",
        path: "src/infrastructure/seeder/seeder.ts",
        pattern: `/* PLOP_INJECT_SERVICE */`,
        template: `private readonly {{camelCase name}}SeederService: {{pascalCase name}}SeederService,`,
      },
      {
        type: "append",
        path: "src/infrastructure/seeder/seeder.ts",
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import { {{pascalCase name}}SeederService } from "./{{dashCase name}}/{{dashCase name}}-seeder.service";`,
      },
    ],
  });
};
