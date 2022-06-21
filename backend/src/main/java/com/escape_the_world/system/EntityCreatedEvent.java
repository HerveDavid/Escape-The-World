package com.escape_the_world.system;

import org.springframework.core.ResolvableType;
import org.springframework.core.ResolvableTypeProvider;

import lombok.Data;

@Data
public class EntityCreatedEvent<T> implements ResolvableTypeProvider {

    private T source;

    public EntityCreatedEvent(final T source) {
        this.source = source;
    }

    @Override
    public ResolvableType getResolvableType() {
        return ResolvableType.forClassWithGenerics(getClass(), ResolvableType.forInstance(source));
    }
}