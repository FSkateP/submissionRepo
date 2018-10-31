
//Displays Repo's for user  
var apiURL = 'https://api.github.com/users/devlinpadayachee/repos?per_page=100'
var demo = new Vue({

    el: '#showRepo',

    data: {
        branches: ['member', 'dev'],
        currentBranch: 'member',
        repos: null
    },

    created: function () {
        this.showData()
    },

    watch: {
        currentBranch: 'showData'
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
        showData: function () {
            var xhr = new XMLHttpRequest()
            var self = this
            xhr.open('GET', apiURL)
            xhr.onload = function () {
                self.repos = JSON.parse(xhr.responseText)
                console.log(self.repos[0].clone_url)
            }
            xhr.send()
        }
    }
})



/**
 * Vue commit messages on button press
 */
var apiURL = 'https://api.github.com/users/devlinpadayachee/commits?per_page=3&sha='
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
