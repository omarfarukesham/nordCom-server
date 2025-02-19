import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { CategoryRoutes } from '../modules/category/category.routes';
import { ProductRoutes } from '../modules/product/product.routes';
import { OrderRoutes } from '../modules/order/order.routes';
import { CouponRoutes } from '../modules/coupon/coupon.routes';
import { SSLRoutes } from '../modules/sslcommerz/sslcommerz.routes';
import { BrandRoutes } from '../modules/brand/brand.routes';
import { ShopRoutes } from '../modules/shop/shop.routes';
import { ReviewRoutes } from '../modules/review/review.routes';
import { FlashSaleRoutes } from '../modules/flashSell/flashSale.routes';
import { MetaRoutes } from '../modules/meta/meta.route';
const router = Router();

const moduleRoutes = [
   {
      path: 'api/user',
      route: UserRoutes,
   },
   {
      path: 'api/auth',
      route: AuthRoutes,
   },
   {
      path: 'api/shop',
      route: ShopRoutes,
   },
   {
      path: 'api/category',
      route: CategoryRoutes,
   },
   {
      path: 'api/brand',
      route: BrandRoutes,
   },
   {
      path: 'api/product',
      route: ProductRoutes,
   },
   {
      path: 'api/flash-sale',
      route: FlashSaleRoutes,
   },
   {
      path: 'api/order',
      route: OrderRoutes,
   },
   {
      path: 'api/coupon',
      route: CouponRoutes,
   },
   {
      path: 'api/ssl',
      route: SSLRoutes,
   },
   {
      path: 'api/review',
      route: ReviewRoutes,
   },
   {
      path: 'api/meta',
      route: MetaRoutes,
   },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
