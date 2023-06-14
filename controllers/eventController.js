const { Event } = require('../models');

// Create a new event
const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create event' });
  }
};

// Update an existing event
const updateEvent = async (req, res) => {
  try {
    const event = await Event.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update event' });
  }
};

// Delete an event
const deleteEvent = async (req, res) => {
  try {
    await Event.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: 'Event deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete event' });
  }
};

module.exports = {
  createEvent,
  updateEvent,
  deleteEvent,
};
