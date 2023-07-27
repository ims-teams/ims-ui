/**
 * 表格数据列类型
 */
export enum TableColumnTypeEnum {
  // 操作
  OPERATIONS = 'OPERATIONS',
  // 日期
  DATE = 'DATE',
  // 时间
  DATETIME = 'DATETIME',
  // 序号
  INDEX = 'INDEX'
}

/**
 * 表格数据列（透传）组合方式 combination
 * MERGE | OVERLAY | OVERLAY_MERGE
 */
export enum TableColumnCombinationModeEnum {
  // 合并
  MERGE = 1,
  // 覆盖
  OVERLAY = 2,
  // 覆盖合并
  OVERLAY_MERGE = 3
}

/**
 * curd emit 事件类型
 * MERGE | OVERLAY | OVERLAY_MERGE
 */
export enum CurdActionEmitEnum {
  // 创建
  CREATE = 'curd-create',
  IMPORT = 'curd-import',
  EDIT = 'curd-edit',
  UPDATE = 'curd-update',
  QUERY = 'curd-query',
  SEARCH = 'curd-search',
  DETAIL = 'curd-detail',
  LISTS = 'curd-lists',
  EXPORT = 'curd-export',
  DELETE = 'curd-delete',
  DESTROY = 'curd-destroy',
  RECOVERY = 'curd-recovery',
  BATCH_DESTROY = 'curd-batch-destroy',
  BATCH_RECOVERY = 'curd-batch-recovery'
}

/**
 * curd emit 位置
 * MERGE | OVERLAY | OVERLAY_MERGE
 */
export enum CurdActionPositionEnum {
  // 创建
  FILTER_ACTION_BAR_LEFT = 'fl',
  FILTER_ACTION_BAR_RIGHT = 'fr',
  TABLE_ROW_OPERATIONS = 'ro'
}

/**
 * Curd 模式
 */
export enum CurdModeEnum {
  // 增加/创建
  CREATE = 1,
  // 编辑/修改
  EDIT = 2,
  // 查看
  DETAIL = 3,
  // 授权
  AUTHORIZATION = 4
}
