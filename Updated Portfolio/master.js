//when a user clicks one of the process buttons
//a description of it will appear
//the other process's are hidden when a single button is clicked
const plan = document.querySelector('#plan');
const design = document.querySelector('#design');
const build = document.querySelector('#build');
const train = document.querySelector('#train');
const launch = document.querySelector('#launch');

document.querySelector('#planBtn').addEventListener('click', runPlan)
document.querySelector('#designBtn').addEventListener('click', runDesign)
document.querySelector('#buildBtn').addEventListener('click', runBuild)
document.querySelector('#trainBtn').addEventListener('click', runTrain)
document.querySelector('#launchBtn').addEventListener('click', runLaunch)

function runPlan(){
    plan.classList.toggle('hidden');
    design.classList.add('hidden')
    build.classList.add('hidden');
	train.classList.add('hidden')
	launch.classList.add('hidden')
}
function runDesign(){
    plan.classList.add('hidden');
    design.classList.toggle('hidden')
    build.classList.add('hidden');
	train.classList.add('hidden')
	launch.classList.add('hidden')
}
function runBuild(){
    plan.classList.add('hidden');
    design.classList.add('hidden')
    build.classList.toggle('hidden');
	train.classList.add('hidden')
	launch.classList.add('hidden')
}
function runTrain(){
    plan.classList.add('hidden');
    design.classList.add('hidden')
    build.classList.add('hidden');
	train.classList.toggle('hidden')
	launch.classList.add('hidden')
}
function runLaunch(){
    plan.classList.add('hidden');
    design.classList.add('hidden')
    build.classList.add('hidden');
	train.classList.add('hidden')
	launch.classList.toggle('hidden')
}
