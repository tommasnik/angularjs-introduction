package cz.artin.angularjs.controller;

import cz.artin.angularjs.dto.Todo;
import cz.artin.angularjs.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Tomas Masnik (tomas.masnik@artin.cz)
 */
@RestController
@RequestMapping("/todo")
public class TodoController {

    @Autowired
    private TodoRepository todoRepository;


    @RequestMapping(method = RequestMethod.GET)
    public List<Todo> get() {
        return todoRepository.all();
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public Todo create(@RequestBody Todo todo) {
        return todoRepository.create(todo);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public Todo get(@PathVariable Long id) {
        return todoRepository.find(id);
    }


    @RequestMapping(method = RequestMethod.POST, value = "/{id}")
    public Todo update(@PathVariable Long id, @RequestBody Todo todo) {
        return todoRepository.update(id, todo);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        todoRepository.delete(id);
    }
}