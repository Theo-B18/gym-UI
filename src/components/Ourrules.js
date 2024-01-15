import React from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom';

const styleBtnJoin = {
    paddingLeft: 150,
    paddingRight: 150,
    textDecoration: 'none',  
}

const RulsList =[{
    id:1,
    rule: 'Do not put your wet body against the bench.',
    rule2: 'Do not put your wet body against the bench.',
},
{
id:2,
rule: 'Wet Shoes wont enter the gym.',
rule2: 'Wet Shoes wont enter the gym.',
},
{
id:3,
rule: 'Wipe wet shoes before Entry.',
rule2: 'Wipe wet shoes before Entry.',
},
{
id:4,
rule: 'Put Equiptment back after use.',
rule2: 'Put Equiptment back after use.',
},
{
id:5,
rule: 'No Jeans wear or hard cloths',
rule2: 'No Jeans wear or hard cloths'
}];
const Ourrules = () => {
  return (
    <div className='container bg-purple p-4 mt-exp'>
         <div className=" mt-exp p-4">
            <h1 className='text-center mb'>OUR GYM RULES:</h1>
            <div className="flex-row">
            <div className="col-50">
            <p className='mt'>AS YOU LIVE BY RULES, SO AS THE GYM!</p>
            <p className='mt'>You will have to observe and follow rules even before and after joining.</p>
            <div>
                <ul>
                {RulsList.map(function(rules){
                    return <li key={rules.id}> {rules.rule} </li>
                })}
                 
                </ul>
            </div>
            </div>
            <div className="col-50 border-left p-1">
            <p>AS YOU LIVE BY RULES, SOAS THE GYM!</p>
            <p className='mt'>You will have to observe and follow rules even before and after joining.</p>
            <div>
                <ul>
                {RulsList.map(function(rules){
                    return <li key={rules.id}> {rules.rule} </li>
                })}
                </ul>
            </div>
            </div>
            </div>
           
            <div className="text-center mt-top">
            <NavLink style={styleBtnJoin} type="button" className='btn-btn-yellow-lg' to="/Register">{'JOIN NOW'}</NavLink>
      </div>
            
        </div>
      
    </div>
  )
}

export default Ourrules
