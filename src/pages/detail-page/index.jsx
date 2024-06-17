import Detail from '../../components/project-detail/index.jsx';
import Header from '../../components/header/index.jsx';
import Footer from '../../components/footer/index.jsx';
import useGetAllProjects from '../../hooks/useGetAllProjects.jsx';
import useGetAllLayouts from '../../hooks/useGetAllLayouts.jsx';

function DetailPage() {
  useGetAllLayouts();
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
