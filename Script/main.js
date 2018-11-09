

//Displays Repo's for user  
var apiURL1 = "https://api.github.com/users/devlinpadayachee/repos"
var showRepo = new Vue({

    el: "#showRepo",

    data: {
        repos: [],
    },
	
	mounted()
	{
		fetch("GET", "https://api.github.com/users/devlinpadayachee/repos?per_page=100")
		.then(response => response.json())
		.then((data) => {
		 this.repos = data;
		})
	}

});


/**
 * Vue commit messages on button press
 */
var apiURL = 'https://api.github.com/repos/devlinpadayachee/contractor_app/commits?per_page=1000&sha='
var commit = new Vue({

    el: '#commit',

    data: {
        branches: ['master', 'dev'],
        currentBranch: 'master',
        commits: null
    },

    created: function () {
        this.fetchData()
    },

    watch: {
        currentBranch: 'fetchData'
    },

    filters: {
        truncate: function (v) {
            var newline = v.indexOf('\n')
            return newline > 0 ? v.slice(0, newline) : v
        },
        formatDate: function (v) {
            return v.replace(/T|Z/g, ' ')
        }
    },

    methods: {
        fetchData: function () {
            var xhr = new XMLHttpRequest()
            var self = this
            xhr.open('GET', apiURL + self.currentBranch)
            xhr.onload = function () {
                self.commits = JSON.parse(xhr.responseText)
                console.log(self.commits[0].html_url)
            }
            xhr.send()
        }
    }
})
