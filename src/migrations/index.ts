import * as migration_20250518_151925_migration from './20250518_151925_migration';
import * as migration_20250523_151205_add_versionning_to_blog_post____xp_post from './20250523_151205_add_versionning_to_blog_post____xp_post';
import * as migration_20250523_211118_migration from './20250523_211118_migration';
import * as migration_20250523_213046_migration from './20250523_213046_migration';
import * as migration_20250603_175620_migration from './20250603_175620_migration';

export const migrations = [
  {
    up: migration_20250518_151925_migration.up,
    down: migration_20250518_151925_migration.down,
    name: '20250518_151925_migration',
  },
  {
    up: migration_20250523_151205_add_versionning_to_blog_post____xp_post.up,
    down: migration_20250523_151205_add_versionning_to_blog_post____xp_post.down,
    name: '20250523_151205_add_versionning_to_blog_post____xp_post',
  },
  {
    up: migration_20250523_211118_migration.up,
    down: migration_20250523_211118_migration.down,
    name: '20250523_211118_migration',
  },
  {
    up: migration_20250523_213046_migration.up,
    down: migration_20250523_213046_migration.down,
    name: '20250523_213046_migration',
  },
  {
    up: migration_20250603_175620_migration.up,
    down: migration_20250603_175620_migration.down,
    name: '20250603_175620_migration'
  },
];
