-- CreateTable
CREATE TABLE `DailyRoutine` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `gestureDrawing` BOOLEAN NOT NULL DEFAULT false,
    `construction` BOOLEAN NOT NULL DEFAULT false,
    `targetedPractice` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `DailyRoutine_date_key`(`date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WeeklySubmission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `hoursSpent` DOUBLE NULL,
    `date` DATETIME(3) NOT NULL,
    `year` INTEGER NOT NULL,
    `weekNumber` INTEGER NOT NULL,

    UNIQUE INDEX `WeeklySubmission_year_weekNumber_key`(`year`, `weekNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MonthlyReview` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `month` VARCHAR(191) NOT NULL,
    `notes` VARCHAR(191) NULL,
    `bestPieceId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MonthlyReview` ADD CONSTRAINT `MonthlyReview_bestPieceId_fkey` FOREIGN KEY (`bestPieceId`) REFERENCES `WeeklySubmission`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
