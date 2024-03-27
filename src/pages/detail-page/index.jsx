import Detail from '../../components/project-detail/index.jsx';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';
import useGetAllProjects from '../../hooks/useGetAllProjects.jsx';

function DetailPage() {
  useGetAllProjects();
  return (
    <>
      <Header />
      <Detail />
      <Footer />
    </>
  );
}

export default DetailPage;
