import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const RecommendationContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const RecommendationTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 1.8rem;
`;

const RecommendationList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const RecommendationItem = styled.div`
  padding: 15px;
  background: #f8f9fa;
  border-radius: 10px;
  text-align: center;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ItemTitle = styled.h3`
  color: #333;
  margin: 10px 0;
`;

const ItemPrice = styled.p`
  color: #666;
  font-weight: bold;
`;

const FashionRecommendation: React.FC = () => {
  const { temperature } = useSelector((state: RootState) => state.weather);

  // 온도에 따른 패션 추천 로직
  const getRecommendations = () => {
    if (temperature >= 28) {
      return [
        {
          title: '민소매',
          image: 'https://image.musinsa.com/mfile_s01/2021/03/17/20210317000000000000000000000000.jpg',
          price: '29,000원',
        },
        {
          title: '반팔',
          image: 'https://image.musinsa.com/mfile_s01/2021/03/17/20210317000000000000000000000001.jpg',
          price: '39,000원',
        },
      ];
    } else if (temperature >= 23) {
      return [
        {
          title: '얇은 가디건',
          image: 'https://image.musinsa.com/mfile_s01/2021/03/17/20210317000000000000000000000002.jpg',
          price: '49,000원',
        },
        {
          title: '면바지',
          image: 'https://image.musinsa.com/mfile_s01/2021/03/17/20210317000000000000000000000003.jpg',
          price: '59,000원',
        },
      ];
    } else if (temperature >= 20) {
      return [
        {
          title: '얇은 니트',
          image: 'https://image.musinsa.com/mfile_s01/2021/03/17/20210317000000000000000000000004.jpg',
          price: '69,000원',
        },
        {
          title: '맨투맨',
          image: 'https://image.musinsa.com/mfile_s01/2021/03/17/20210317000000000000000000000005.jpg',
          price: '79,000원',
        },
      ];
    } else {
      return [
        {
          title: '자켓',
          image: 'https://image.musinsa.com/mfile_s01/2021/03/17/20210317000000000000000000000006.jpg',
          price: '89,000원',
        },
        {
          title: '코트',
          image: 'https://image.musinsa.com/mfile_s01/2021/03/17/20210317000000000000000000000007.jpg',
          price: '99,000원',
        },
      ];
    }
  };

  const recommendations = getRecommendations();

  return (
    <RecommendationContainer>
      <RecommendationTitle>오늘의 패션 추천</RecommendationTitle>
      <RecommendationList>
        {recommendations.map((item, index) => (
          <RecommendationItem key={index}>
            <ItemImage src={item.image} alt={item.title} />
            <ItemTitle>{item.title}</ItemTitle>
            <ItemPrice>{item.price}</ItemPrice>
          </RecommendationItem>
        ))}
      </RecommendationList>
    </RecommendationContainer>
  );
};

export default FashionRecommendation; 