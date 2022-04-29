import React from "react";
import {
  FaHome,
  FaUserEdit,
  ShoppingBag,
  FaAdversal,
  FaStore,
  FaUsers,
  FaCircle,
  FaCog,
  FaQuestionCircle,
  FaSlidersH,
  FaUser,
  FaShoppingCart,
  FaGift,
} from "react-icons/fa";
import * as Icon from "react-feather";
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "collapse",
    icon: <FaHome size={20} />,
    // badge: "warning",
    // badgeText: "2",
    children: [
      {
        id: "analyticsDash",
        title: "Analytics",
        type: "item",
        icon: <FaCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/",
      },
    ],
  },
  {
    type: "groupHeader",
    groupTitle: "My Components",
  },
  {
    id: "customer",
    title: "Customer",
    type: "collapse",
    icon: <FaUsers size={20} />,
    children: [
      {
        id: "customerList",
        title: "All Customer",
        type: "item",
        icon: <FaCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/customer/customerList",
      },
    ],
  },
  {
    id: "seller",
    title: "Seller",
    type: "collapse",
    icon: <FaUser size={20} />,
    children: [
      {
        id: "SellerList",
        title: "All Seller",
        type: "item",
        icon: <FaCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/seller/sellerList",
      },
    ],
  },
  {
    id: "productManagement",
    title: "Product Management",
    type: "collapse",
    icon: <Icon.ShoppingBag size={20} />,
    children: [
      {
        id: "simpleProductList",
        title: "Simple Product",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/productManagement/simpleProduct/simpleProductList",
      },
      //  {
      //    id: "variantList",
      //    title: "Variant",
      //    type: "item",
      //    icon: <Icon.Circle size={12} />,
      //    permissions: ["admin", "editor"],
      //    navLink: "/app/productManagement/variant/variantList",
      //  },
      //  {
      //    id: "unitsList",
      //    title: "Units",
      //    type: "item",
      //    icon: <Icon.Circle size={12} />,
      //    permissions: ["admin", "editor"],
      //    navLink: "/app/productManagement/units/unitsList",
      // },
      // {
      //   id: "allcategory",
      //   title: "All Category",
      //   type: "collapse",
      //   icon: <Icon.Circle size={15} />,
      //   children: [
      //     {
      //       id: "category",
      //       title: "Category",
      //       type: "item",
      //       icon: <Icon.Circle size={12} />,
      //       permissions: ["admin", "editor"],
      //       navLink: "/app/productManagement/allCategory/category/category",
      //     },
      //     {
      //       id: "subCategory",
      //       title: "Sub Category",
      //       type: "item",
      //       icon: <Icon.Circle size={12} />,
      //       permissions: ["admin", "editor"],
      //       navLink: "/app/productManagement/allCategory/subCategory/subCategory",
      //     },
      //     {
      //       id: "childCategory",
      //       title: "Child Category",
      //       type: "item",
      //       icon: <Icon.Circle size={12} />,
      //       permissions: ["admin", "editor"],
      //       navLink: "/app/productManagement/allCategory/childCategory/childCategory",
      //     },
      //   ],
      // },
    ],
  },
  {
    id: "store",
    title: "Store",
    type: "collapse",
    icon: <FaStore size={20} />,
    children: [
      {
        id: "stores",
        title: "Stores",
        type: "item",
        icon: <FaCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/store/stores/storesList",
      },
      // {
      //   id: "storesRequest",
      //   title: "Stores Request",
      //   type: "item",
      //   icon: <FaCircle size={12} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/store/storesRequest/storesRequestList",
      // },
    ],
  },
  {
    id: "order",
    title: "Orders List",
    type: "collapse",
    icon: <FaShoppingCart size={20} />,
    children: [
      {
        id: "allOrder",
        title: "All Order",
        type: "item",
        icon: <FaCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/order/allOrder",
      },
      // {
      //   id: "pendingOrder",
      //   title: "Pending Order",
      //   type: "item",
      //   icon: < FaCircle size={12}/>,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/order/pendingOrder",
      // },
      // {
      //   id: "orderDelivered",
      //   title: "Order Delivered List",
      //   type: "item",
      //   icon: < FaCircle size={12}/>,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/order/orderDelivered",
      // },
      // {
      //   id: "cancelledOrder",
      //   title: "Cancelled Order",
      //   type: "item",
      //   icon: < FaCircle size={12}/>,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/order/cancelledOrder",
      // },
      // {
      //   id: "completeOrder",
      //   title: "Complete Order",
      //   type: "item",
      //   icon: < FaCircle size={12} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/order/completeOrder",
      // },
    ],
  },
  {
    id: "Services",
    title: "Services",
    type: "collapse",
    icon: <FaShoppingCart size={20} />,
    children: [
      {
        id: "recharg",
        title: "Mobile Recharge",
        type: "item",
        icon: <FaCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/services/recharg",
      },
      {
        id: "DthRecharg",
        title: "DTH Recharge",
        type: "item",
        icon: <FaCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/services/dthRecharg",
      },
      {
        id: "electricity",
        title: "Electricity Bill",
        type: "item",
        icon: <FaCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/services/electricity",
      },
      {
        id: "bookGas",
        title: "Book Gas",
        type: "item",
        icon: <FaCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/services/bookGas",
      },
      {
        id: "broadband",
        title: "Broadband Bill",
        type: "item",
        icon: <FaCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/services/broadband",
      },
      {
        id: "waterBill",
        title: "Water Bill",
        type: "item",
        icon: <FaCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/services/waterBill",
      },
     
      {
        id: "fasTag",
        title: "FasTag Recharge",
        type: "item",
        icon: <FaCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/services/fasTag",
      },
      {
        id: "airline",
        title: "Airtime",
        type: "item",
        icon: <FaCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/services/airline",
      },
      {
        id: "bus",
        title: "Bus Ticket",
        type: "item",
        icon: <FaCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/services/bus",
      },
      {
        id: "train",
        title: "Train Ticket ",
        type: "item",
        icon: <FaCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/services/bus",
      },
     
    ],
  },
  // {
  //   id: "offersandcoupons",
  //   title: "Coupons",
  //   type: "collapse",
  //   icon: <FaGift size={20} />,
  //   children: [
  //     {
  //       id: "offerList",
  //       title: "Offers",
  //       type: "item",
  //       icon: < FaCircle size={12}/>,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/offerAndCoupon/offer/offerList",
  //     },
  //     {
  //       id: "couponsList",
  //       title: "Coupons",
  //       type: "item",
  //       icon: <FaCircle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/offerAndCoupon/coupons/couponsList",
  //     },
  //   ],
  // },
  // {
  //   id: "sliderList",
  //   title: "Slider",
  //   icon: <FaSlidersH size={20} />,
  //   type: "item",
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/slider/sliderList",
  // },

  {
    id: "Wallet",
    title: "Wallet",
    type: "collapse",
    icon: <FaShoppingCart size={20} />,
    children: [
      {
        id: "walletPage",
        title: "Wallet",
        type: "item",
        icon: <FaUserEdit size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/app/walletPage/walletPage",
      },
      {
        id: "withdrawalRequest",
        title: "withdrawalRequest",
        type: "item",
        icon: <FaUserEdit size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/app/walletPage/withdrawalRequest",
      },
      {
        id: "Deposit",
        title: "Deposit",
        type: "item",
        icon: <FaUserEdit size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/app/walletPage/Deposit",
      },
      {
        id: "Transaction",
        title: "Transaction",
        type: "item",
        icon: <Icon.DollarSign size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/app/walletPage/TransactionList",
      },
      // {
      //   id: "pendingOrder",
      //   title: "Pending Order",
      //   type: "item",
      //   icon: < FaCircle size={12}/>,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/order/pendingOrder",
      // },
      // {
      //   id: "orderDelivered",
      //   title: "Order Delivered List",
      //   type: "item",
      //   icon: < FaCircle size={12}/>,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/order/orderDelivered",
      // },
      // {
      //   id: "cancelledOrder",
      //   title: "Cancelled Order",
      //   type: "item",
      //   icon: < FaCircle size={12}/>,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/order/cancelledOrder",
      // },
      // {
      //   id: "completeOrder",
      //   title: "Complete Order",
      //   type: "item",
      //   icon: < FaCircle size={12} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/order/completeOrder",
      // },
    ],
  },
  {
    id: "sellerSubscription",
    title: "Seller subscription Details",
    type: "item",
    icon: <FaUserEdit size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/sellerSubs/sellerSubscription",
  },
  // {
  //   id: "TAndCList",
  //   title: "Terms And Condition",
  //   type: "item",
  //   icon: <FaFileSignature size={20} />,
  //   navLink: "/app/termsAndCondition/tAndCList",
  // },
  // {
  //   id: "privacyPolicy",
  //   title: "Privacy Policy",
  //   type: "item",
  //   icon: <FaCog size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/privacyPolicy/privacyPolicy",
  // },
  // {
  //   id: "sponsoredAd",
  //   title: "Sponsored Ads Details",
  //   type: "item",
  //   icon: <FaAdversal size={20} />,
  //   navLink: "/app/sponsoredAds/sponsoredAd",
  // },
  // {
  //   id: "helpAndSupport",
  //   title: "Help And Support",
  //   type: "collapse",
  //   icon: <FaQuestionCircle size={20} />,
  //   children: [
  //     {
  //       id: "importDemo",
  //       title: "Import Demo",
  //       type: "item",
  //       icon: <FaCircle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/helpAndSupport/importDemo/ImportDemo",
  //     },
  //   ],
  // },
];
export default navigationConfig;
// {
//   id: "subsDetails",
//   title: " Subscription Details ",
//   type: "item",
//   icon: < MdOutlineSubscriptions size={20}/>,
//   navLink: "/app/subsDetails/subsDetails",
// },
// {
//   id: "notification",
//   title: "Notification",
//   type: "item",
//   icon: < FaBell size={20}/>,
//   navLink: "/app/notificat/notification",
// },
// {
//   id: "sellerPayout",
//   title: "Seller Payouts",
//   type: "collapse",
//   icon: <Icon.DollarSign size={20} />,
//   children: [
//     {
//       id: "pendingPaymentsList",
//       title: "Pending Payments List",
//       type: "item",
//       icon: <Icon.Circle size={12} />,
//       permissions: ["admin", "editor"],
//       navLink: "/app/sellerPayout/pendingPayments/pendingPaymentsList",
//     },
//     {
//       id: "completedPaymentsList",
//       title: "completed Payments List",
//       type: "item",
//       icon: <Icon.Circle size={12} />,
//       permissions: ["admin", "editor"],
//       navLink: "/app/sellerPayout/pendingPayments/completedPaymentsList",
//     },
//   ]
// },
// {
//   id: "churnRate",
//   title: "Churn Rate",
//   type: "item",
//   icon: < FaAlipay size={20}/>,
//   navLink: "/app/churnRate/churnRate",
// },
// {
//   id: "siteSetting",
//   title: "Site Setting",
//   type: "collapse",
//   icon: <Icon.Grid size={20} />,
//   children: [
//     {
//       id: "general",
//       title: "General",
//       type: "item",
//       icon: <Icon.Circle size={12} />,
//       permissions: ["admin", "editor"],
//       navLink: "/app/siteSetting/General",
//     },
//     {
//       id: "emailSetting",
//       title: "Mail Setting",
//       type: "item",
//       icon: <Icon.Circle size={12} />,
//       permissions: ["admin", "editor"],
//       navLink: "/app/siteSetting/emailSetting",
//     },
//     {
//       id: "smsSetting",
//       title: "SMS Setting",
//       type: "item",
//       icon: <Icon.Circle size={12} />,
//       permissions: ["admin", "editor"],
//       navLink: "/app/siteSetting/smsSetting",
//     },
//   ]
// },
// {
//   id: "subscription",
//   title: "Subscriptions",
//   type: "item",
//   // icon: <Icon.Youtube size={20} />,
//   permissions: ["admin", "editor"],
//   navLink: "/app/marketing/subscription/subscriptionList",
// },
// {
//   id: "returnedOrder",
//   title: "Returned Order",
//   type: "item",
//   icon: < FaCircle size={12}/>,
//   permissions: ["admin", "editor"],
//   navLink: "/app/order/returnedOrder",
// },
// {
//   id: "roleList",
//   title: "Roles and Permission",
//   type: "item",
//   icon: <Icon.GitMerge size={20} />,
//   permissions: ["admin", "editor"],
//   navLink: "/app/roleAndPermission/roleList",
// },
// {
//   id: "mailReport",
//   title: "Mail Report",
//   type: "item",
//   icon: < FaEnvelope size={20}/>,
//   permissions: ["admin", "editor"],
//   navLink: "/app/emailReport/mailReport",
// },
// {
//   id: "smsReport",
//   title: " SMS Report",
//   type: "item",
//   icon: < FaSms size={20}/>,
//   permissions: ["admin", "editor"],
//   navLink: "/app/sms/smsReport",
// },
// {
//   id: "wallet",
//   title: "Wallet",
//   type: "collapse",
//   icon: < FaWallet size={20}/>,
//   children: [
//     {
//       id: "walletList",
//       title: "Wallet",
//       type: "item",
//       icon: < FaCircle size={12}/>,
//       permissions: ["admin", "editor"],
//       navLink: "/app/wallet/walletList",
//     },
//   ]
// },
// {
//   id: "invoiceSetting",
//   title: "Invoice Setting ",
//   type: "item",
//   icon: < FaCircle size={12}/>,
//   permissions: ["admin", "editor"],
//   navLink: "/app/order/invoiceSetting",
// },
// {
//   id: "invoiceDesign",
//   title: "Invoice Design ",
//   type: "item",
//   icon: < FaCircle size={12}/>,
//   permissions: ["admin", "editor"],
//   navLink: "/app/order/invoiceDesign",
// },
// {
//   id: "bank",
//   title: "Bank",
//   type: "collapse",
//    icon: < FaHouseDamage size={20} />,
//    children: [
//     {
//       id: "bank",
//       title: "bank Details",
//       type: "item",
//       icon: < FaCircle size={12}/>,
//       permissions: ["admin", "editor"],
//       navLink: "/app/bank/bank",
//     },
//   ]
// },
// {
//   id: "marketing",
//   title: "Marketing Tools",
//   type: "collapse",
//   icon: <FaShoppingBag size={20}/>,
//   children: [
//     {
//       id: "advertiesement",
//       title: "advertiesement",
//       type: "item",
//       icon: < FaCircle size={12}/>,
//       permissions: ["admin", "editor"],
//       navLink: "/app/marketing/advertiesement/advertiesementList",
//     },
//     {
//       id: "pushnotification",
//       title: "Push Notification",
//       type: "item",
//       icon: < FaCircle size={12}/>,
//       permissions: ["admin", "editor"],
//       navLink: "/app/marketing/pushnotification/addPushnotification",
//     },
//   ]
// },
// {
//   id: "productManagement",
//   title: "Product Management",
//   type: "collapse",
//   icon: <Icon.ShoppingBag size={20} />,
//   children: [
//      {
//        id: "simpleProductList",
//        title: "Simple Product",
//        type: "item",
//        icon: <Icon.Circle size={12} />,
//        permissions: ["admin", "editor"],
//        navLink: "/app/productManagement/simpleProduct/simpleProductList",
//      },
//      {
//        id: "variantList",
//        title: "Variant",
//        type: "item",
//        icon: <Icon.Circle size={12} />,
//        permissions: ["admin", "editor"],
//        navLink: "/app/productManagement/variant/variantList",
//      },
//      {
//        id: "unitsList",
//        title: "Units",
//        type: "item",
//        icon: <Icon.Circle size={12} />,
//        permissions: ["admin", "editor"],
//        navLink: "/app/productManagement/units/unitsList",
//     },
//     {
//       id: "allcategory",
//       title: "All Category",
//       type: "collapse",
//       icon: <Icon.Circle size={15} />,
//       children: [
//         {
//           id: "category",
//           title: "Category",
//           type: "item",
//           icon: <Icon.Circle size={12} />,
//           permissions: ["admin", "editor"],
//           navLink: "/app/productManagement/allCategory/category/category",
//         },
//         {
//           id: "subCategory",
//           title: "Sub Category",
//           type: "item",
//           icon: <Icon.Circle size={12} />,
//           permissions: ["admin", "editor"],
//           navLink: "/app/productManagement/allCategory/subCategory/subCategory",
//         },
//         {
//           id: "childCategory",
//           title: "Child Category",
//           type: "item",
//           icon: <Icon.Circle size={12} />,
//           permissions: ["admin", "editor"],
//           navLink: "/app/productManagement/allCategory/childCategory/childCategory",
//         },
//       ],
//     },
//   ]
// },
