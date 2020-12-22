import debounce from '/javascripts/debounce.js';

$(function() {
  const API = {
    getAllContacts() {
      $.ajax({
          url: "api/contacts",
          type: "GET",
          dataType: "json",
        }).done(function(json) {
          Contacts.loadAll(json);
          App.listContacts();
        });
    },
    updateContact(contactObj, id) {
      $.ajax({
        url: `api/contacts/${id}`,
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify(contactObj),
      }).done(function() {
        API.getAllContacts();
      });
    },
    saveContact(contactObj) {
      $.ajax({
        url: "api/contacts/",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(contactObj),
      }).done(function() {
        API.getAllContacts();
      });
    },
    deleteContact(id) {
      $.ajax({
        url: `api/contacts/${id}`,
        type: "DELETE",
      }).done(function() {
        API.getAllContacts();
      });
    },
  };

  const Contacts = {
    contacts: [],
    selectedContacts : [],

    create() {
      let formInfo = {
        full_name: UI.$inputName.val(),
        email: UI.$inputEmail.val(),
        phone_number: UI.$inputPhone.val(),
        tags: UI.$inputTags.val().split(' ').map(tag => tag.toLowerCase()).join(','),
      };
      API.saveContact(formInfo);
    },
    delete(contactId) {
      API.deleteContact(contactId);
    },
    loadAll(json) {
      Tags.deleteTags();
      this.contacts = [];
      json.forEach((contactInfo) => {
        this.contacts.push(contactInfo);
        Tags.extractFromContact(contactInfo);
        this.selectedContacts = this.contacts;
      });
    },
    load(contactId) {
      let loadedContact = undefined;
      this.contacts.forEach((contact) => {
        if (parseInt(contactId) === contact.id) {
          loadedContact = contact;
        }
      });
      return loadedContact;
    },
    update(contactId) {
      let formInfo = {
        id: parseInt(contactId),
        full_name: UI.$inputName.val(),
        email: UI.$inputEmail.val(),
        phone_number: UI.$inputPhone.val(),
        tags: UI.$inputTags.val().split(" ").join(","),
      };
      console.log(formInfo);
      API.updateContact(formInfo, contactId)
    },
    chooseByName(searchVal) {
      let ids = []
      this.selectedContacts.forEach(contact => {
        if (contact.full_name.toLowerCase().match(searchVal)) {
          ids.push(contact.id);
        }
      });
      if(ids.length > 0) {
        return ids;
      }
      return undefined;
    },
    setSelectedContacts(ids) {
      this.selectedContacts = [];
      this.contacts.forEach(contact => {
        if (ids.includes(contact.id)) {
          this.selectedContacts.push(contact);
        }
      });
    },
    chooseByIds(ids) {
      return this.selectedContacts.filter(contact => ids.includes(contact.id));
    },
    init() {
      API.getAllContacts();
    },
  };

  const Tags = (() => {
    let tags = [];
    function getAllNames() {
      return tags.map(tag => tag.name);
    }

    return {
      getObjectIds(tagName) {
        let tagObj = tags.filter(tag => tag.name === tagName)[0];
        return tagObj.contacts;
      },
      extractFromContact(contact) {
        if(contact.tags === null) {
          return;
        }

        let tagNames = getAllNames();
        contact.tags.split(',').forEach(tag => {
          if (!tagNames.includes(tag)) {
            tags.push({name: tag, contacts: [contact.id]});
          } else {
            let idx = tagNames.indexOf(tag);
            tags[idx].contacts.push(contact.id);
          }
        });
      },
      getByName(tagName) {
        return tags.filter(tag => tag.name === tagName);
      },
      deleteTags() {
        tags.length = 0;
      },
      getAll() {
        return tags;
      }
    };
  })();

  const UI = {
    contactTemplate: null,
    tagTemplate: null,

    $header: $('header'),
    $container: $('.container'),
    $controls: $('.controls'),
    $emptyContacts: $('.empty'),
    $searchError: $('.error'),
    $tagFilter: $('.tag-filter'),
    $showContacts: $('.show'),
    $search: $('#search'),
    $noMatch: $('.error'),
    $noMatchMessage: $('#search_message'),

    $form: $('.form'),
    $formCancel: $('.cancel'),
    $inputName: $('input[name="form_name"]'),
    $inputEmail: $('input[name="form_email"]'),
    $inputPhone: $('input[name="form_phone_number"]'),
    $inputTags: $('input[name="form_tags"]'),
    $formAction: $('#action'),

    $tagsBar: $('.tags-bar'),
    $tagsTitle: $('.tags-title'),


    editContact(contact, id) {
      this.hideAll();
      this.$form.removeClass("hide");

      this.$form.attr('data-id', id);
      this.$inputName.val(contact.full_name);
      this.$inputEmail.val(contact.email);
      this.$inputPhone.val(contact.phone_number);
      this.$inputTags.val(contact.tags.split(",").join(" "));
      this.$formAction.html('Edit');
    },
    newContact() {
      this.hideAll();
      this.$form.removeClass("hide");
      this.$formAction.html('New');
    },
    renderContacts(contactsArr) {
      this.hideAll();
      this.$controls.removeClass("hide");
      this.$showContacts.removeClass("hide");
      this.$showContacts.html(this.contactTemplate({ contacts: contactsArr }));
    },
    renderAllContacts() {
      this.hideAll();
      this.$controls.removeClass("hide");
      this.$showContacts.removeClass("hide");
      let allContacts = { contacts: Contacts.selectedContacts };
      this.$showContacts.html(this.contactTemplate(allContacts));
    },
    renderAllTags() {
      this.$tagsTitle.text("Tags |");
      this.$tagsBar.html(this.tagTemplate({ tags: Tags.getAll() }));
    },
    hideAll() {
      this.$controls.addClass("hide");
      this.$emptyContacts.addClass("hide");
      this.$searchError.addClass("hide");
      this.$tagFilter.addClass("hide");
      this.$showContacts.addClass("hide");
      this.$form.addClass("hide");
      this.$noMatch.addClass("hide");
    },
    renderTag(tagName) {
      this.$tagsTitle.text("Filtering by |");
      this.$tagsBar.html(this.tagTemplate({ tags: Tags.getByName(tagName) }));
    },
    registerTemplates() {
      this.contactTemplate = Handlebars.compile($('#contact_template').html());
      this.tagTemplate = Handlebars.compile($('#tag-template').html());
    },
    displayNoMatches(text) {
      this.$showContacts.addClass("hide");
      this.$noMatch.removeClass("hide");
      this.$noMatchMessage.html(text);
    },
    clearForm() {
      this.$form.attr('data-id', "");
      this.$inputName.val("");
      this.$inputEmail.val("");
      this.$inputPhone.val("");
      this.$inputTags.val("");
    },
    init() {
      this.registerTemplates();
    },
  };

  const App = {
    getContactId(event) {
      return $(event.target).closest('.contact').attr('data-id');
    },
    listContacts() {
      UI.renderAllContacts();
      UI.renderAllTags();
    },
    filterByTag(tagName) {
      let objectIds = Tags.getObjectIds(tagName);
      Contacts.setSelectedContacts(objectIds);

      UI.renderContacts(Contacts.selectedContacts);
      UI.renderTag(tagName);
    },
    refreshTagFiltering() {
      Contacts.selectedContacts = Contacts.contacts;
      UI.renderAllContacts();
      UI.renderAllTags();
    },
    filterByName() {
      let searchVal = UI.$search.val().trim().toLowerCase();

      if (searchVal.length === 0) {
        UI.$noMatchMessage.val = "";
        UI.renderAllContacts();
        return;
      }

      let ids = Contacts.chooseByName(searchVal);
      if (ids === undefined) {
        UI.displayNoMatches(searchVal);
      } else {
        UI.renderContacts(Contacts.chooseByIds(ids));
      }
    },
    listAllTags() {
      UI.renderAllTags();
    },
    addListeners() {
      this.handleHomePage();
      this.handleContactEvents();
      this.handleFormEvents();
      this.handleControlBarEvents();
    },
    handleHomePage() {
      UI.$header.on('click', e => {
        e.preventDefault();
        UI.renderAllContacts();
      });
    },
    handleContactEvents() {
      UI.$container.on('click', '.edit', e => {
        e.preventDefault();

        let id = this.getContactId(e);
        let contact = Contacts.load(id);
        UI.editContact(contact, id);
      });
      UI.$container.on('click', '.delete', e => {
        e.preventDefault();
        Contacts.delete(this.getContactId(e))
      });
      UI.$container.on('click', '.add_contact', e => {
        e.preventDefault();

        UI.newContact();
      });
    },
    handleFormEvents() {
      UI.$form.on('submit', e => {
        e.preventDefault();
        let action = UI.$formAction.html();

        if(action === "Edit") {
          Contacts.update(UI.$form.attr('data-id'));
        } else if(action === "New") {
          Contacts.create();
        }
        UI.clearForm();
      });
      UI.$formCancel.click(e => {
        e.preventDefault();
        UI.clearForm();
        UI.renderAllContacts();
      });
    },
    handleControlBarEvents() {
      UI.$search.keyup(() => this.filterByName());
      UI.$tagsBar.on('click', '.tag', e => {
        e.preventDefault();
        
        if (UI.$tagsTitle.text() === "Tags |") {
          this.filterByTag(e.target.textContent);
        } else if( UI.$tagsTitle.text() === "Filtering by |") {
          this.refreshTagFiltering();
        }
      });
    },
    init() {
      this.filterByName = debounce(this.filterByName.bind(this), 300);
      Contacts.init();
      this.addListeners();
      UI.init();
    },
  }
  App.init();
});