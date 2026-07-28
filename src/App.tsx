import ReactPlayer from 'react-player';

function App() {

    return (
        <div id="main-container" className="min-w-full min-h-full flex justify-center bg-emerald-300">
            <div id='center-container' className="bg-sky-400 w-1/2 min-h-full">
                <div id="center-text-container" className="flex justify-center min-h-full">
                    <div id='vertical-container' className="flex flex-col text-center min-h-full">
                        <div id="portfolio-title-container">
                            <h1 className="text-8xl text-fuchsia-300 font-micro">PORTFOLIO</h1>
                            <h2 className="text-4xl text-purple-200 font-micro">SEBASTIAN PENNING</h2>
                        </div>
                        <div id="gnp-container min-h-full">
                            <h1 className="text-4xl text-rose-300 font-micro">Great Northern Peaks</h1>
                        </div>
                        <div id="transcendence-container">
                            <h1 className="text-4xl text-yellow-300 font-micro">Transcendence</h1>
                            <ReactPlayer src='test.webm' width="100%" height="auto" controls={true} />;
                        </div>
                        <div id="minirt-container">
                            <h1 className="text-4xl text-orange-300 font-micro">miniRT</h1>
                            <ReactPlayer src='test.webm' width="100%" height="auto" controls={true} />
                        </div>
                        <div id="fdf-container">
                            <h1 className="text-4xl text-indigo-600 font-micro">FDF</h1>
                            <ReactPlayer src='test.webm' width="100%" height="auto" controls={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
