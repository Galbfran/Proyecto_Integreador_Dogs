const temper = await Temperament.findOrCreate({ where: { name: temperaments } });
    await newDog.addDogTemperament(temper[0]);

    const dbDogs = await Dog.findAll(
        {
        include: [{
            model: Temperament,
            through: "dog_temperament",
            as: "dogTemperament"
            }],
        })