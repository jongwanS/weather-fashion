import { getMusinsaProducts, getBrandiProducts, Product } from './fashionApi';

export interface WeatherBasedRecommendation {
  temperature: number;
  condition: string;
  recommendations: {
    outer: Product[];
    top: Product[];
    bottom: Product[];
    accessories: Product[];
  }
}

export class RecommendationService {
  private getRecommendedCategories(temperature: number, condition: string): string[] {
    if (temperature >= 28) {
      return ['top:반팔', 'bottom:반바지', 'accessories:모자'];
    } else if (temperature >= 23) {
      return ['top:얇은셔츠', 'bottom:면바지', 'accessories:선글라스'];
    } else if (temperature >= 20) {
      return ['outer:가디건', 'top:긴팔', 'bottom:청바지'];
    } else if (temperature >= 17) {
      return ['outer:자켓', 'top:니트', 'bottom:슬랙스'];
    } else {
      return ['outer:코트', 'top:니트', 'bottom:기모바지'];
    }
  }

  async getRecommendations(temperature: number, condition: string): Promise<WeatherBasedRecommendation> {
    const categories = this.getRecommendedCategories(temperature, condition);
    
    // 각 카테고리별 상품 가져오기
    const [outerProducts, topProducts, bottomProducts, accessoryProducts] = await Promise.all([
      getMusinsaProducts('outer'),
      getMusinsaProducts('top'),
      getMusinsaProducts('bottom'),
      getMusinsaProducts('accessories')
    ]);

    return {
      temperature,
      condition,
      recommendations: {
        outer: outerProducts,
        top: topProducts,
        bottom: bottomProducts,
        accessories: accessoryProducts
      }
    };
  }
} 