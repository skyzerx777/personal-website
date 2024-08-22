import './App.css';
import AboutMeSection from './components/AboutMeSection';
import Header from './components/Header';
import PortfolioSection from './components/PortfolioSection';
import SkillsSection from './components/SkillsSection';

function App() {
	return (
		<>
			<Header></Header>
			<main>
				<AboutMeSection></AboutMeSection>
				<SkillsSection></SkillsSection>
				<PortfolioSection></PortfolioSection>
			</main>
		</>
	);
}

export default App;
