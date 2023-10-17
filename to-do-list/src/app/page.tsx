// import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid h-screen place-items-center ">
      <h1 className="text-white text-4xl ">To Do List</h1>
      <div className="bg-slate-100 h-auto w-auto rounded-lg justify-center">
          <div className="grid grid-rows-2 grid-flow-col gap-2 bg-gray-600">

              <div className='mx-3 flex'>                <input className='mx-11 my-3 rounded-lg h-11' type="text" />
                <button className="mx-28 my-3 bg-green-500 w-16 h-11 rounded-lg">Add</button>
              </div>
              <div className='mx-3'>
                <p className="flex my-2">Take out trash <img className="mx-48" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADQElEQVR4nO2aW4hNURjHfw5mcmtCQsolYhJD8SBJqTlIlDdlJrfIi8S4RLk1kgkzNRhMImY0KMojCSk8UEpJrnlyeZDThGJmXFq1Tu1Zzllr7+2sdfZo/ep7mrX2933/tWet71v7gMfj8Xg8Ho/H4/HEpzcwCZgPVAObgV1AXQGsFtgOrAIWAaUkiOlAG9AO/HZgN4FeJIQ1QKejxIV9A8YrMVQAZ4AbQAMw2uXKdzpMXtg2JYZ5wA9lzEdgogsB2hwn/xjoE/A/RCaba+xVFxteu8Pku4AZSgznNOMztgUod7z6RxT/CwzjX9sWIG0I4IVcoRP/ePwdBc4CAwK+BwJvDf532xag2pB8X4u+Gw3JvwL6Y5kaTQDnLfqdDfzU+P4lTwbr7NMEcdyST1H9PTWsfjOO2K8JQhQjNqg1JP8OKMMRBzWB1FvwNxXoMAiwFIccjiDAWOAUcBdoBebEqDkeGpK/jGPqQwowAniv/F2Uz2sj+NpqSP4TMJyECnBaU9ktDuFngmyAdAKsUOaUJUmA55pxX3OUt0FEy3vLkPx1Zc4oYA8JEuCeIYEPco/IxTrD3C/AGGXONUubcGwBqgxJCHsGDFaePxL4bJi3QZmzzOIpFFsA8RpfCiHCHaBEWUnd+PtAKjB+aKA1TpQAyMRuhxDhohQsu5L57Dswme60aPwXXYDsCuk2xKw1ai45siYuWoMsDOG/6AIIxoVIzmRPlE5TtMlveooAgpny+IuTfJecH+RYRP9FFwBZAHXFEOAQ3ZmVpzVOvACCjRGTVy85SuXxGde/02YoHw0hk891ybElwpuS2HY4BVwJIUBzxDfwAD3oQqQf8CDGJYfu7REXJ9bZqwmgKeKzhsn/8Vyv/pI8c5o0/p00QzUFvhQVTc0jpdFZrxnfqvEvvkpbp0oTwEulro/CFGAuMEgzpkR++MjnfzkOSIc4tkR9frJAvw+ok89qMSQvrNKFAOUhj7BimPiRhnVSjj+OhrWM0iZb5UICEnb5VeovpoW4q3dpHXITdcrqhIggYlhJkaiQ53KmCIln5MngfOVzkZK/zUnLOkEUJDsLeAzuADbJZ1dKX842PI/H4/F4PB6Px8N/xx8PjADCaixT5wAAAABJRU5ErkJggg=="></img></p> 
                <p className="flex my-2">Don't be gay <img className="mx-52" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpUlEQVR4nO2aW4hOURTHf+MyX5FGDKYwLk1JEeLFNeVh8sA0Bi+UFLmWBxJvyK08KQ2R8uRJIUqmiFxeDG8iIrmUZOQ6SIx27Yevr69jrX1Ozj5f61frbe9/e62z1r4eMAzDMAzDMAzDSMcYYBNwGNgJTCM7Gr32QWA3MIvI2AX8BPoq7BRQn1J7LvC+ivYFYAgRsLbK4MqtM4X2aOBdgrYLQu48/UcAnLUH6NYBVwTak8mRoYIBOnsLDFdqrxNqhwT3vwegDzir0G0GPgl155EzzxRBaBemfpcis0rkzHZFACSlsEGht54IGAjcz6gUxgOfhTrnfLZEQYuiZp11VNFwzlwV9n8CNBAZKxUBcGv7yIr+W4V9e4HpREpnYClMAL4I+60hYkrK+cCVQj/ghrD9cQpAC/BRsSrsF7a9F8OSJ2W5Igsk9sGXSaE4lpHzf4A2CkgJ6M4gAPsoMOOAnhTOXwP6U3CW+DTWOv8KGEGNcDogALOpEQYDjwMC4O4Aa4IzgfX/A5hJwVmRcgV4EXCTFA0TFTvCJLsU07FXygDgbkYbIWc7KBiHMnTe2S9gPgVhEfBb6NhtRdvXVe4QoqMReCN06Ll/2TmgyITrMe8M64CLQkfcV19QNl/cUQRhD5GyTeHE3oq+YxVnBhe8ViJjir+rkzjQ7W+SK+lQBLDHH7SiYBDwSDjwr8CkBK2TiiDcimU+OKIY9EZBMB8q9FzZ5UqDIvUvC3d0U4HvQk33Mp0rrYp3gFEK3c2KLMj1gaRNOMilAdrnhdruhTo3mgU7OTexhTAMeBl7CThOJAzwgb8QCcX9DPUtQX81EVAPHPUHlvLB3QSaMtCf4+8FyrXdQ+wWIqMJWAasAmZkrO22ywv9F18cy99hhmEYhmEYhmFQWP4C2EHWfuHz/iwAAAAASUVORK5CYII="></img></p> 
              </div>
          </div>
        </div> 
    </main>
  )
}
