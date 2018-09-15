export const packages: IPackage[] = [
  // {
  //   'type': 'Honeymoon',
  //   'imgURL': 'https://res.cloudinary.com/dxqin8fbx/image/fetch/f_auto,q_auto:eco,w_148,h_187/https://d29m6q8e2acg44.cloudfront.net/public-product/mkt/honeymoon_tilt.png',
  //   'description': 'Honeymoon'
  // },
  {
    'type': 'Family',
    'imgURL': 'https://res.cloudinary.com/dxqin8fbx/image/fetch/f_auto,q_auto:eco,w_148,h_187/https://d29m6q8e2acg44.cloudfront.net/public-product/mkt/family_tilt.png',
    'description': 'Family'
  },
  {
    'type': 'Adventure',
    'imgURL': 'https://res.cloudinary.com/dxqin8fbx/image/fetch/f_auto,q_auto:eco,w_148,h_187/https://d29m6q8e2acg44.cloudfront.net/public-product/mkt/adventure_tilt.png',
    'description': 'Adventure'
  },
  {
    'type': 'Wildlife',
    'imgURL': 'https://res.cloudinary.com/dxqin8fbx/image/fetch/f_auto,q_auto:eco,w_148,h_187/https://d29m6q8e2acg44.cloudfront.net/public-product/mkt/wildlife_tilt.png',
    'description': 'Wildlife'
  },
  // {
  //   'type': 'Water Activities',
  //   'imgURL': 'https://res.cloudinary.com/dxqin8fbx/image/fetch/f_auto,q_auto:eco,w_148,h_187/https://d29m6q8e2acg44.cloudfront.net/public-product/mkt/beaches_tilt.png',
  //   'description': 'Water Activities'
  // },
  {
    'type': 'Nature',
    'imgURL': 'https://res.cloudinary.com/dxqin8fbx/image/fetch/f_auto,q_auto:eco,w_148,h_187/https://d29m6q8e2acg44.cloudfront.net/public-product/mkt/hill_station_tilt.png',
    'description': 'Nature'
  }
];



export interface IPackage {
  type: string;
  imgURL: string;
  description: string;
}


export const adventureTours = [
  {
    'imgURL': 'https://imgcld.yatra.com/ytimages/image/upload/t_ann_guru_trip_desktop/v1517480849/AdvNation/ANN_GRP15/ann_group_15_zPJcMm.jpg',
    'title': 'Scuba Diving'
  },
  {
    'imgURL': 'https://imgcld.yatra.com/ytimages/image/upload/t_ann_guru_trip_desktop/v1517480857/AdvNation/ANN_GRP16/ann_group_16_fLvulK.jpg',
    'title': 'Trekking'
  },
  {
    'imgURL': 'https://imgcld.yatra.com/ytimages/image/upload/t_ann_guru_trip_desktop/v1517480878/AdvNation/ANN_GRP20/ann_group_20_qnAfLm.jpg',
    'title': 'Para Gliding'
  },
  {
    'imgURL': 'https://imgcld.yatra.com/ytimages/image/upload/t_ann_guru_trip_desktop/v1517480900/AdvNation/ANN_GRP25/ann_group_25_C01K9U.jpg',
    'title': 'Skiing'
  }
];



export const natureTours = [
  {
    'title': 'Chadar Frozen River Trek',
    'imgURL': 'https://imgcld.yatra.com/ytimages/image/upload/t_ann_trip_srp/v1517480868/AdvNation/ANN_TRP634/Chadar_shutterstock_141003724_1439470873_VoBuwr.jpg'
  },
  {
    'title': 'The Dream Ride Motor Bike Expeditio...',
    'imgURL': 'https://imgcld.yatra.com/ytimages/image/upload/t_ann_trip_srp/v1517482103/AdvNation/ANN_TRP530/Bike-Expedition-Ladakh_1439472639_F6YkoV.jpg'
  },
  {
    'title': 'Everest Base Camp Trek',
    'imgURL': 'https://imgcld.yatra.com/ytimages/image/upload/t_ann_trip_srp/v1517481657/AdvNation/ANN_TRP237/Camping-Everest-Base-Camp_1439798320_Pqn2qW.jpg'
  },
  {
    'title': 'Roopkund Trek',
    'imgURL': 'https://imgcld.yatra.com/ytimages/image/upload/t_ann_trip_srp/v1517481513/AdvNation/ANN_TRP108/Roopkund_1439471754_QzM3X0.jpg'
  },
  {
    'title': 'Hampta Pass Trek with Chandratal',
    'imgURL': 'https://imgcld.yatra.com/ytimages/image/upload/t_ann_trip_srp/v1517482777/AdvNation/ANN_TRP541/Trek-Hampta-Pass_1468905700_gremco.jpg'
  },
  {
    'title': 'Monsoon Trek to Rajmachi and Kondan...',
    'imgURL': 'https://imgcld.yatra.com/ytimages/image/upload/t_ann_trip_srp/v1517483250/AdvNation/ANN_TRP685/trekking-in-maharashtra_1494415546_cThrzG.jpg'
  },
  {
    'title': 'Andharban Monsoon Trek',
    'imgURL': 'https://imgcld.yatra.com/ytimages/image/upload/t_ann_trip_srp/v1517483023/AdvNation/ANN_TRP678/western-ghats_1491813362_SzhP0e.jpg'
  }
];


export const bannerImages = [
  {
    title: 'Asian Tour Packages',
    description: "Explore the unexplored Natural beautiful fresh thirlling destinations",
    imgURL: 'https://imgcld.yatra.com/ytimages/image/upload/t_ann_home_banner_desktop/v1517481657/AdvNation/ANN_TRP237/Camping-Everest-Base-Camp_1439798320_Pqn2qW.jpg'
  },
  {
    title: "Asian Tour Packages",
    description: "Enjoy wildlife, heritage places, deep forest, moutains, deep valleys and more.",
    imgURL: "https://imgcld.yatra.com/ytimages/image/upload/t_ann_home_banner_desktop/v1517482569/AdvNation/ANN_TRP132/Uttarakhand_Valley_of_Flowers_Trek_1462362316_Pk13nk.jpg"
  }
];


export const tourPackageDetails = [
  {
    title: "Thialand",
    description: "beaches, facinating night life, umptuous food",
    timeDuration: "3 days -  4 nights",
    price: "22000",
    imgeURL: "https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_w_800_c_fill_g_auto_q_auto:good_f_jpg/v1462770701/Bangkok-Wat_Traimit1.jpg"
  },
  {
    title: "Bhutan",
    description: "One of the happiest country",
    timeDuration: "4 days -  3 nights",
    price: "19000",
    imgeURL: "https://imgcld.yatra.com/holiday-india/image/upload/t_yt_blog_w_800_c_fill_g_auto_q_auto:good_f_jpg/v1445319180/blog/Bhutan.jpg"
  },
  {
    title: "Seychelles",
    description: "White-sand beaches, topaz water, abundant hills",
    timeDuration: "3 days -  3 nights",
    price: "17000",
    imgeURL: "https://imgcld.yatra.com/holiday-india/image/upload/t_yt_blog_w_800_c_fill_g_auto_q_auto:good_f_jpg/v1445319143/blog/Seychelles_Islands.jpg"
  },
  {
    title: "Nepal",
    description: "country of sherpas, snow, serenity and spirituality",
    timeDuration: "3 days -  4 nights",
    price: "14500",
    imgeURL: "https://imgcld.yatra.com/holiday-india/image/upload/t_yt_blog_w_800_c_fill_g_auto_q_auto:good_f_jpg/v1445319155/blog/Nepal.jpg"
  },
  {
    title: "Myanmar(burma)",
    description: "Numerous parks and lakes, and the towering, gilded Shwedagon Pagoda",
    timeDuration: "3 days -  3 nights",
    price: "13000",
    imgeURL: "https://lh5.googleusercontent.com/-ITE5NeWxDnY/VlTA11BopiI/AAAAAAABq-o/8rUnSTly_5cUmtjOdQu27jdglNNYN9gqwCJkC/w541-h360-k-no/"
  }
];
