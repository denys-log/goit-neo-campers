import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className="container">
          <h1 className="text-white text-h1 mb-4">Campers of your dreams</h1>
          <p className="text-white mb-10 text-h2">
            You can find everything you want in our catalog
          </p>
          <Button onClick={() => navigate('/catalog')}>View Now</Button>
        </div>
      </div>
    </>
  );
}
