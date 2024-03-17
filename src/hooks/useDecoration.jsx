import { useEffect } from 'react';

function useDecoration({ refSkills, refProjects, refComponents }) {
  useEffect(() => {
    const createLineToSection = (section) => {
      const line = document.createElement('div');
      line.classList.add('line-to-section');
      const lineHeight = section.current.offsetTop;
      line.style.height = `${lineHeight}px`;
      section.current.appendChild(line);
    };

    createLineToSection(refSkills);
    createLineToSection(refProjects);
    createLineToSection(refComponents);
  }, [refSkills, refProjects, refComponents]);

  return <div></div>;
}

export default useDecoration;
