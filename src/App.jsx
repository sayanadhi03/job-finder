
import Navbar from './components/Navbar/index';
import Header from './components/Header/index';
import SearchBar from './components/SearchBar/index';
import JobCard from './components/JobCard/index';
import JobData from './JobDummyData';
JobData


function App() {
  
  return (
    <div>
      <Navbar/>
      <Header/>
      <SearchBar/>
      {JobData.map((job) => (
        <JobCard key={job.id} {...job}/>
      ))}
    </div>
  )
}

export default App
