
var numberOfJobs = 5;

var allJobsInfo = "";
var role = new Array(numberOfJobs);
var site = new Array(numberOfJobs);
var deadline = new Array(numberOfJobs);
var application = new Array(numberOfJobs);
var contact = new Array(numberOfJobs);

role[1] = "JobRole1";
site[1] = "JobSite1";
deadline[1] = "Deadline1";
application[1] = "JobApplication1";
contact[1] = "Contact1";

role[2] = "JobRole2";
site[2] = "JobSite2";
deadline[2] = "Deadline2";
application[2] = "JobApplication2";
contact[2] = "Contact2";

role[3] = "JobRole3";
site[3] = "JobSite3";
deadline[3] = "Deadline3";
application[3] = "JobApplication3";
contact[3] = "Contact3";

role[4] = "JobRole4";
site[4] = "JobSite4";
deadline[4] = "Deadline4";
application[4] = "JobApplication4";
contact[4] = "Contact4";

role[5] = "JobRole5";
site[5] = "JobSite5";
deadline[5] = "Deadline5";
application[5] = "JobApplication5";
contact[5] = "Contact5";

role[0] = "Job Role"; site[0] = "Site"; deadline[0] = "Deadline"; application[0] = "Application Pack"; contact[0] = "Contact";
allJobsInfo = allJobsInfo + "<tr> <th>"+role[0]+"</th> <th>"+site[0]+"</th> <th>"+deadline[0]+"</th> <th>"+application[0]+"</th> <th>"+contact[0]+"</th> </tr>";

for (var i=1; i<=numberOfJobs; i++) {
	if (i%2==0) {var shade = " class='shade'";} else {var shade=""}
	allJobsInfo = allJobsInfo + "<tr"+shade+"> <td>"+role[i]+"</td> <td>"+site[i]+"</td> <td>"+deadline[i]+"</td> <td>"+application[i]+"</td> <td>"+contact[i]+"</td> </tr>";
}

if (numberOfJobs > 0) {
	document.getElementById('careersdetails').innerHTML = "<table class='jobstable'>" + allJobsInfo + "</table>" + "<br>If you have any queries or you wish to discuss the job role please send an email to Elaine Hamling at : <b> e.hamling@nhs.net</b>";
}
else {
	document.getElementById('careersdetails').innerHTML = "<h3>We are currently recruiting for Salaried GPs to work at St Andrews Health Centre. You can download an application pack <a href='#'>here</a>.</h3>";
}

