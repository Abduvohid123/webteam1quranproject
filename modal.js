setTimeout(() => {
    


document.body.innerHTML+=`<div class="modal" id="myModal">
<div class="modal-dialog">
  <div class="modal-content">

    <!-- Modal Header -->
    <div class="modal-header">
      <h4 class="modal-title">Quron yodlash</h4>
      <button type="button" class="close" data-dismiss="modal">&times;</button>
    </div>

    <!-- Modal body -->
    <div class="modal-body">
      <input class="form-control" id="cut">
    </div>

    <!-- Modal footer -->
    <div class="modal-footer">
      <button type="button" onclick="yodlash()" class="btn btn-primary" data-dismiss="modal">Submit</button>
    </div>

  </div>
</div>
</div>


`

}, 1000);