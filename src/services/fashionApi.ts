import axios from 'axios';

const MUSINSA_AFFILIATE_KEY = process.env.REACT_APP_MUSINSA_AFFILIATE_KEY;
const BRANDI_AFFILIATE_KEY = process.env.REACT_APP_BRANDI_AFFILIATE_KEY;

export interface Product {
  id: string;
  title: string;
  brand: string;
  price: number;
  imageUrl: string;
  productUrl: string;
  category: 'outer' | 'top' | 'bottom' | 'accessories';
  rank?: number;
  source: string;
}

// 임시 데이터로 구현
const TEMP_PRODUCTS: Product[] = [
  {
    id: '1',
    title: '베이직 티셔츠',
    brand: '무신사 스탠다드',
    price: 19000,
    imageUrl: 'https://image.msscdn.net/images/goods_img/20200618/1491016/1491016_1_500.jpg',
    productUrl: 'https://store.musinsa.com/app/goods/1491016',
    category: 'top',
    rank: 1,
    source: 'musinsa'
  },
  {
    id: '2',
    title: '와이드 데님 팬츠',
    brand: '무신사 스탠다드',
    price: 39000,
    imageUrl: 'https://image.msscdn.net/images/goods_img/20190910/1154158/1154158_1_500.jpg',
    productUrl: 'https://store.musinsa.com/app/goods/1154158',
    category: 'bottom',
    rank: 2,
    source: 'musinsa'
  }
];

export const getMusinsaProducts = async (category: string): Promise<Product[]> => {
  // 실제 API 연동 시 아래 주석을 해제하고 사용
  /*
  try {
    const response = await axios.get(`https://api.musinsa.com/products`, {
      params: {
        category,
        affiliate_key: MUSINSA_AFFILIATE_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch Musinsa products:', error);
    return [];
  }
  */
  
  // 임시로 더미 데이터 반환
  return TEMP_PRODUCTS.filter(product => product.category === category);
};

export const getBrandiProducts = async (category: string): Promise<Product[]> => {
  // 실제 API 연동 시 구현
  return [];
}; 