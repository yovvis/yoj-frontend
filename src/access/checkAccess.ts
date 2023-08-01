import ACCESS_ENUM from "@/access/accessEnum";

/**
 * 检查权限
 * @param loginUser 登录用户
 * @param needAccess 需要具有的权限
 * @return boolean
 */
const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
  // 1.当前登录用户具有的权限(没有loginUser，那么就表示未登录)
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  // 2.如果用户登录才行
  if (needAccess === ACCESS_ENUM.USER) {
    // todo 只要登录就行
    // 用户没登录就没有权限
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }
  // 3.需要管理员登录
  if (needAccess === ACCESS_ENUM.ADMIN) {
    // !=先转成相同类型再比较
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }
  return true;
};
export default checkAccess;
