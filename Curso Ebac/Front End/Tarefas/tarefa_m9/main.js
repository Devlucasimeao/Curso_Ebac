$(document).ready(function() {
  
    $('form').on('submit', function(e){
      e.preventDefault();
      $('form').on('click', function() {
        const newItemText = $('#endereco-tarefa-nova').val(); 
      if (newItemText.trim() !== '') { // Verifica se o valor não está vazio ou contém apenas espaços em branco
        const newItem = $('<li>').text(newItemText);
        newItem.click(function() {
          $(newItem).toggleClass('clicked');
        });
        $('#listContainer').append(newItem);
        $('#endereco-tarefa-nova').val('');
      }
    })

  });
});