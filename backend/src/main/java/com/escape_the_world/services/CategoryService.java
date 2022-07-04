package com.escape_the_world.services;

import com.escape_the_world.entities.Category;
import com.escape_the_world.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Category createOrUpdate(Category category) {
        return categoryRepository.save(category);
    }

    public Category getByName(final String name) {
        return categoryRepository.findById(name).get();
    };

    public List<Category> getAll() {
        return categoryRepository.findAll();
    }

    public void remove(final String name) {
        categoryRepository.deleteById(name);
    }
}
