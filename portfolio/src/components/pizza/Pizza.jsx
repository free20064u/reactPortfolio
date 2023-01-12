import React from 'react'

const Pizza = () => {
  return (
    <>
    <h1>Blackstone Bistro | Pizza-on-Demand</h1>

<p>Our 12" wood-fired pizzas are available for delivery. Build your custom pizza and we'll deliver it within an hour.</p>

<form method='POST'>
  <fieldset>
    <legend>Your Information</legend>

    <label>Name: <input type="text" name="customername" /></label>
    <label>Address:</label> <input type="text" name="address" id="" />
    <label>Telephone Number: <input type="tel" name="phone" id="" /> </label>
    <label>Email: <input type="email" name="email" id="" /> </label>
    <label>Delivery instructions: <textarea name='instructions' rows="4" cols="60" maxlength="400" placeholder="Not more than 400 characters long"></textarea> </label>
  </fieldset>


<h2>Design Your Dream Pizza:</h2>

<fieldset>
<legend>Pizza specs</legend>

<p>Crust <em>(Choose one)</em>:</p>
<select>
  <option value="Classic white">Classic white</option>
  <option value="Multigrain">Multigrain</option>
  <option value="Cheese-stuffed crust">Cheese-stuffed crust</option>
  <option value="">Gluten-free</option>
</select>

<p>Toppings <em>(Choose as many as you want)</em>:</p>
<label><input type="checkbox" name="toppings" id="" value="White Sauce" />white Sauce</label><br/>
<label><input type="checkbox" name="toppings" id="" value="Red Sauce" />Red Sauce</label><br/>
<label><input type="checkbox" name="toppings" id="" value="Mozarella Cheese" />Mozarella Cheese</label><br/>
<label><input type="checkbox" name="toppings" id="" value="Pepperoni" />Pepperoni</label><br/>
<label><input type="checkbox" name="toppings" id="" value="Mushroom" />Mushroom</label><br/>
<label><input type="checkbox" name="toppings" id="" value="Peppers" />Peppers</label><br/>
<label><input type="checkbox" name="toppings" id="" value="Anchovies" />Anchovies</label><br/>

<p>Number</p>
<p>How many pizzas:</p>
</fieldset>
<button type="submit">Bring me a pizza</button>
</form>
</>
  )
}

export default Pizza