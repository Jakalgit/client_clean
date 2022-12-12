import BasketPage from './page/BasketPage';
import Item from './page/ItemPage';
import Catalog from './page/Catalog';
import {
    BASKET_ROUTE,
    CATALOG_ROUTE,
    CHECKORDER_ROUTE,
    CREATEORDER_ROUTE,
    DELANDPAY_ROUTE,
    DISCOUNT_ROUTE,
    FIND_ROUTE,
    FINDYOURORDER_ROUTE,
    HOME_ROUTE,
    ITEM_ROUTE,
    NEW_ROUTE,
    POPULAR_ROUTE,
    REPAIR_ROUTE,
    THANKS_ROUTE,
    YOURORDER_ROUTE
} from "./utils/consts";
import CheckOrder from "./page/CheckOrder";
import DeliveryAndPay from "./page/DeliveryAndPay";
import FindPage from "./page/FindPage";
import Thanks from "./page/Thanks";
import Home from "./page/Home";
import FindYourOrder from "./page/FindYourOrder";
import YourOrder from "./page/YourOrder";
import DiscountCatalog from "./page/DiscountCatalog";
import PopularCatalog from "./page/PopularCatalog";
import NewCatalog from "./page/NewCatalog";
import DisableOrder from "./page/DisableOrder";
import NotFound from "./page/NotFound";
import Repair from "./page/Repair";

export const routes = [
    {
        path: BASKET_ROUTE,
        Component: BasketPage
    },
    {
        path: REPAIR_ROUTE,
        Component: Repair
    },
    {
        path: ITEM_ROUTE + '/:id',
        Component: Item
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: CREATEORDER_ROUTE,
        Component: DisableOrder
    },
    {
        path: CHECKORDER_ROUTE,
        Component: CheckOrder
    },
    {
        path: DELANDPAY_ROUTE,
        Component: DeliveryAndPay
    },
    {
        path: FIND_ROUTE,
        Component: FindPage
    },
    {
        path: THANKS_ROUTE,
        Component: Thanks
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: FINDYOURORDER_ROUTE,
        Component: FindYourOrder
    },
    {
        path: YOURORDER_ROUTE + '/:number',
        Component: YourOrder
    },
    {
        path: DISCOUNT_ROUTE,
        Component: DiscountCatalog
    },
    {
        path: POPULAR_ROUTE,
        Component: PopularCatalog
    },
    {
        path: NEW_ROUTE,
        Component: NewCatalog
    },
    {
        path: "*",
        Component: NotFound
    }
]