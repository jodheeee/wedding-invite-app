import { useState, useEffect } from 'react';

// 이 컴포넌트가 페이지에서 가장 큰 시각적 요소라고 가정합니다.
function SlowLCPComponent() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 3초(3000ms) 후에 데이터를 로딩하는 것처럼 시뮬레이션
    const timer = setTimeout(() => {
      setData({
        // 매우 큰 이미지를 고의로 로딩하여 LCP 점수를 확실히 낮춥니다.
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/%22..._Porta_il_tuo_salvadanaio_per_de_papa_ritomi_presto_vincitore%22._Banco_Roma%2C_Sottoscrizione_prestito_nazionale_1917..._-_affiche_-_Aurelio_Craffonara_-_btv1b9016863q.jpg'
      });
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.imageUrl} alt="Large content" />
    </div>
  );
}

export default SlowLCPComponent;
