import Spiner from '../../Loader/Loader';
import h from './Moviespage.module.css';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export default function Moviespage() {
  return (
    <div>
      {Status.IDLE === Status.PENDING && <Spiner />}
      <h2 className={h.title}>Welcome</h2>
      {Status.IDLE === Status.RESOLVED && (
        <>
          <p className={h.text}>Phonebook</p>
        </>
      )}
    </div>
  );
}
