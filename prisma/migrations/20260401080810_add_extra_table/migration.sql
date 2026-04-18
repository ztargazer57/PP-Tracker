-- CreateTable
CREATE TABLE `Extra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `note` VARCHAR(191) NULL,
    `streak` INTEGER NULL,
    `picUrl` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
