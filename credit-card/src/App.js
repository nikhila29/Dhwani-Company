import React from 'react';

function App() {
  return (
<div class="container" style={{textAlign:"center" , marginTop:"200px"}}>
	<div class="row">
		<div class="col-sm-6 col-sm-offset-3">
			<form class="form-horizontal well">
				<fieldset>
          <div class="col-sm-3">
            <label for="cardNumber" class="col-sm-4 control-label" style={{color:"gray", fontWeight:"bold",fontSize:"30px"}}>Card Number*  </label>
            <input type="text" maxlength="4" class="def-txt-input" name="chars[1]" autocomplete="card" style={{borderRadius:"10px",padding:"20px 20px", margin:"10px"}}/>
            <input type="text" maxlength="4" class="def-txt-input" name="chars[2]" style={{borderRadius:"10px",padding:"20px 20px", margin:"10px"}}/>
            <input type="text" maxlength="4" class="def-txt-input" name="chars[3]" style={{borderRadius:"10px",padding:"20px 20px", margin:"10px"}}/>
            <input type="text" maxlength="4" class="def-txt-input" name="chars[4]" style={{borderRadius:"10px",padding:"20px 20px", margin:"10px"}}/>
					</div>

					<div class="form-group">
						<div class="col-sm-8 col-sm-offset-4">
							<button type="reset" class="btn btn-default">Cancel</button>
							<button type="submit" class="btn btn-success">Submit</button>
						</div>
					</div>

				</fieldset>
			</form>
		</div>
	</div>
</div>
  );
}



export default App;
