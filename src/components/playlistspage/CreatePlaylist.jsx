import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { createPlaylist } from '../../redux/actions'



const CreatePlaylist = () => {

    const dispatch = useDispatch()
    const [nameValue, setNameValue] = useState('')

    const handleChange = (e) => {
        setNameValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newPlaylist = {
            name: nameValue,
            addedTracks: []
        }
        dispatch(createPlaylist(newPlaylist))
    }

    // useEffect(() => {
    //     console.log(nameValue)
    // }, [nameValue])

  return (
    <div>
        <Form variant='dark' bg='dark' onSubmit={(e) => handleSubmit(e)}>
        <Form.Group>
            <Form.Label>Name Playlist</Form.Label>
            <Form.Control type='text' placeholder='' onChange={(e) => handleChange(e)}/>
            <Button variant='dark' type='submit'>Create Playlist</Button>
        </Form.Group>
        </Form>
        
    </div>
  )
}

export default CreatePlaylist
