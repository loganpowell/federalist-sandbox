import { withRouter } from 'next/router';
import queryString from "query-string";
/**
 * Our router to override the missing query when deploying to static export
 * This is required for page components that need access to the router
   stolen from: https://github.com/zeit/next.js/issues/4804#issuecomment-460754433
 */
export const withPageRouter = Component => {
  return withRouter(({ router, ...props }) => {
    router.query = queryString.parse(router.asPath.split(/\?/)[1]);

    return <Component {...props} router={router} />;
  });
};