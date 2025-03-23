// DATA-HREF

function init_target_link(attribute){

    const elements = document.querySelectorAll('*')

    for(const element of elements) {

        element.addEventListener('click', () => {

            const element_href = element.getAttribute(attribute)

            if(element_href == null) return
            
            element_href.startsWith('#') || element_href.startsWith('/') ? location.href = element_href : window.open(element_href)

        })

    }

}

init_target_link('data-href')

// FLOWING TOGGLER

function flowing_toggler(class_name) {

    const elements = document.getElementsByClassName(class_name)

    for(const element of elements) {

        element.addEventListener('click', ()=>{
        
            for(const el of document.getElementsByClassName(class_name)) el.classList.remove('active')

            element.classList.add('active')

        })

    }

}

flowing_toggler('filter')

// FILTER PROJECTS

function filter_projects(active_filter) {

    const elements = document.getElementsByClassName('project')

    for(const element of elements) {

        if(active_filter == 0) element.classList.remove('hide')

        else element.getAttribute('data-filter') == active_filter ? element.classList.remove('hide') : element.classList.add('hide')

    }

}

// SHOW-HIDE CONTACT FORM

const elements = document.getElementsByClassName('hidden')

const base_element = document.querySelector('#name')

const show_form = () => { for(const element of elements) element.classList.remove('hide') }

const hide_form = () => { for(const element of elements) element.classList.add('hide') }

function check_form() {

    if (document.activeElement.parentElement==base_element.parentElement || base_element.value || elements[0].value || elements[1].value) {

        show_form()

    } else { hide_form() }

}

// COMPILE FORM

function compile_form(text) {

    document.querySelector('#message').value = text

    show_form()

    location.href = '#contacts'
    
    document.querySelector('#name').focus()

}
