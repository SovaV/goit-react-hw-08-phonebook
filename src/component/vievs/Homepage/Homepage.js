import h from './Homepage.module.css';
import phone from '../../img/pngwing.com-min-removebg-preview.png';
export default function HomePage() {
  return (
    <div>
      <h2 className={h.title}>Телефонная книга</h2>
      <img src={phone} alt="" className={h.img} />
    </div>
  );
}
