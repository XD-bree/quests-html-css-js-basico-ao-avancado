const Main = {
    init: function() {
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors: function() {
        this.$checkButtons = document.querySelectorAll('.check')
        this.$inTask = document.querySelector('#inTask')
        this.$list = document.querySelector('#list')
        this.$removeButtons = document.querySelectorAll('.remove')
    },

    bindEvents: function() {
        const self = this
        this.$checkButtons.forEach((button) => {
            button.onclick = self.Events.checkButton_click
        });

        this.$inTask.onkeypress = self.Events.inTask_keypress.bind(this)

        this.$removeButtons.forEach(function(button) {
            button.onclick = self.Events.removeButton_click
        })
    },

    Events: {
        checkButton_click: (e) => {
            const li = e.target.parentElement
            const isDone = li.classList.contains('done')
            
            if (!isDone) {
                return li.classList.add('done')
            }

            li.classList.remove('done')
          
        },

        inTask_keypress: function(e) {
            const key = e.key 
            const value = e.target.value

            if (key === 'Enter') {
                this.$list.innerHTML += `
                <li>
                    <div class="check"></div>
                    <span class="task">
                        ${value}
                    </span>
                    <button class="remove"></button>
                </li>
                `

                e.target.value = ' '

                this.cacheSelectors()
                this.bindEvents()
            }
        },

        removeButton_click: (e) => {
            let li = e.target.parentElement

            li.classList.add('removed')

            setTimeout(() => {
                li.classList.add('hidden')
            }, 300)
        }
    }
}

Main.init()