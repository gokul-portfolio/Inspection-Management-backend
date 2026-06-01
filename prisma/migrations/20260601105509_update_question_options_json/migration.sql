/*
  Warnings:

  - The `options` column on the `TemplateQuestion` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "TemplateQuestion" DROP CONSTRAINT "TemplateQuestion_templateId_fkey";

-- AlterTable
ALTER TABLE "TemplateQuestion" DROP COLUMN "options",
ADD COLUMN     "options" JSONB;

-- AddForeignKey
ALTER TABLE "TemplateQuestion" ADD CONSTRAINT "TemplateQuestion_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "Template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
