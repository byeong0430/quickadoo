$(() => {
  const { activateCopyBtn, activateDeleteBtn, makeUrlCopyBtn } = activateBtns;
  const { selectFirstField, validateForm, submitEventForm } = formFunc;
  const { dtPickerConfig, activateCalendar } = makeCalendar;
  // change all icon cursors to pointer
  $('i.material-icons').css('cursor', 'pointer');

  // activate calendar
  activateCalendar();

  // activate copy and delete button for options
  activateCopyBtn(dtPickerConfig);
  activateDeleteBtn();

  // activate the url-copy button
  makeUrlCopyBtn();

  // auto focus input[name="first_name"]
  selectFirstField();

  // activate form validator
  validateForm();

  // submit event form
  submitEventForm();

  // add the host name at the beginning of poll_url and admin_url
  $('.host-name').html(`${window.location.host}/events/`);

  // when voter email's filled, check if email exists in db
  // if so, auto-fill input boxes based on the info
  updateVoterInfo();
});
