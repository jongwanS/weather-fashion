import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { RecommendationService, WeatherBasedRecommendation } from '../services/recommendationService';
import { Product } from '../services/fashionApi';

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const WeatherInfo = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 15px;
`;

const ProductCard = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
`;

const ProductTitle = styled.h4`
  margin: 10px 0 5px;
  font-size: 14px;
`;

const ProductBrand = styled.p`
  margin: 5px 0;
  font-size: 12px;
  color: #666;
`;

const ProductPrice = styled.p`
  margin: 5px 0;
  font-size: 14px;
  font-weight: bold;
`;

const BuyButton = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
`;

const WeatherFashion: React.FC = () => {
  const [recommendations, setRecommendations] = useState<WeatherBasedRecommendation | null>(null);
  const { temperature, description } = useSelector((state: RootState) => state.weather);
  const recommendationService = new RecommendationService();

  useEffect(() => {
    const fetchRecommendations = async () => {
      const result = await recommendationService.getRecommendations(temperature, description);
      setRecommendations(result);
    };

    if (temperature) {
      fetchRecommendations();
    }
  }, [temperature, description]);

  if (!recommendations) {
    return <div>Loading...</div>;
  }

  const renderProductCard = (product: Product) => (
    <ProductCard key={product.id}>
      <ProductImage src={product.imageUrl} alt={product.title} />
      <ProductBrand>{product.brand}</ProductBrand>
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
      <BuyButton href={product.productUrl} target="_blank" rel="noopener noreferrer">
        구매하기
      </BuyButton>
    </ProductCard>
  );

  return (
    <Container>
      <WeatherInfo>
        <h2>오늘의 날씨 기반 추천 코디</h2>
        <p>기온: {recommendations.temperature}°C</p>
        <p>날씨: {recommendations.condition}</p>
      </WeatherInfo>
      
      {Object.entries(recommendations.recommendations).map(([category, products]) => (
        <div key={category}>
          <h3>{category.toUpperCase()}</h3>
          <ProductsGrid>
            {products.map(renderProductCard)}
          </ProductsGrid>
        </div>
      ))}
    </Container>
  );
};

export default WeatherFashion; 