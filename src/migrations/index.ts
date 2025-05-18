import * as migration_20250518_151925_migration from './20250518_151925_migration';

export const migrations = [
  {
    up: migration_20250518_151925_migration.up,
    down: migration_20250518_151925_migration.down,
    name: '20250518_151925_migration'
  },
];
