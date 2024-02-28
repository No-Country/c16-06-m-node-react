'use client'
import { useRouter } from 'next/navigation';
import data from '@/data/data'; // 

const DetailPage = () => {
    const router = useRouter();
    
    
    if (!router.query) {
      return <p>Cargando detalles del documental...</p>;
    }
  
    const { documentaryId } = router.query;
  
    
    if (!documentaryId) {
      return <p>Cargando detalles del documental...</p>;
    }
  
    
    const documentaryDetails = data.find((doc) => String(doc.id) === String(documentaryId));
  
    
    return (
      <div>
        {documentaryDetails ? (
          <div>
            <h1>{documentaryDetails.nameOriginal}</h1>
            <p>{documentaryDetails.description}</p>
            
          </div>
        ) : (
          <p>Cargando detalles del documental...</p>
        )}
      </div>
    );
  };
  
  export default DetailPage;