import './App.css';
import AboutMeSection from './components/AboutMeSection';
import Header from './components/Header';
import SkillsSection from './components/SkillsSection';

function App() {
	return (
		<>
			<Header></Header>
			<main>
				<AboutMeSection></AboutMeSection>
				<SkillsSection></SkillsSection>
			</main>
		</>
	);
}

export default App;
