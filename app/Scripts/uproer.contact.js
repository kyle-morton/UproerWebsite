var uproer = uproer || {};
uproer.contact = {
    events: {
        clear: function () {
            $('#ContactFormContainer form').find("input[type=text], textarea").val("");
        }
    },
    methods: {
        init: function () {
        }
    }
}

$(document).ready(uproer.contact.methods.init);